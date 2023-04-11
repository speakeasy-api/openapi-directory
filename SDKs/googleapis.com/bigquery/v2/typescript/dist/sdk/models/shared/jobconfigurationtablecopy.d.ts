import { SpeakeasyBase } from "../../../internal/utils";
import { EncryptionConfiguration } from "./encryptionconfiguration";
import { TableReference } from "./tablereference";
export declare class JobConfigurationTableCopy extends SpeakeasyBase {
    /**
     * [Optional] Specifies whether the job is allowed to create new tables. The following values are supported: CREATE_IF_NEEDED: If the table does not exist, BigQuery creates the table. CREATE_NEVER: The table must already exist. If it does not, a 'notFound' error is returned in the job result. The default value is CREATE_IF_NEEDED. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    createDisposition?: string;
    destinationEncryptionConfiguration?: EncryptionConfiguration;
    /**
     * [Optional] The time when the destination table expires. Expired tables will be deleted and their storage reclaimed.
     */
    destinationExpirationTime?: any;
    destinationTable?: TableReference;
    /**
     * [Optional] Supported operation types in table copy job.
     */
    operationType?: string;
    sourceTable?: TableReference;
    /**
     * [Pick one] Source tables to copy.
     */
    sourceTables?: TableReference[];
    /**
     * [Optional] Specifies the action that occurs if the destination table already exists. The following values are supported: WRITE_TRUNCATE: If the table already exists, BigQuery overwrites the table data. WRITE_APPEND: If the table already exists, BigQuery appends the data to the table. WRITE_EMPTY: If the table already exists and contains data, a 'duplicate' error is returned in the job result. The default value is WRITE_EMPTY. Each action is atomic and only occurs if BigQuery is able to complete the job successfully. Creation, truncation and append actions occur as one atomic update upon job completion.
     */
    writeDisposition?: string;
}

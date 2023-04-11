import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo } from "./googleclouddataplexv1dataprofileresultprofilefieldprofileinfo";
/**
 * A field within a table.
 */
export declare class GoogleCloudDataplexV1DataProfileResultProfileField extends SpeakeasyBase {
    /**
     * The mode of the field. Possible values include: REQUIRED, if it is a required field. NULLABLE, if it is an optional field. REPEATED, if it is a repeated field.
     */
    mode?: string;
    /**
     * The name of the field.
     */
    name?: string;
    /**
     * The profile information for each field type.
     */
    profile?: GoogleCloudDataplexV1DataProfileResultProfileFieldProfileInfo;
    /**
     * The field data type. Possible values include: STRING BYTE INT64 INT32 INT16 DOUBLE FLOAT DECIMAL BOOLEAN BINARY TIMESTAMP DATE TIME NULL RECORD
     */
    type?: string;
}

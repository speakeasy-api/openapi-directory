import { SpeakeasyBase } from "../../../internal/utils";
/**
 * DataAccessSpec holds the access control configuration to be enforced on data stored within resources (eg: rows, columns in BigQuery Tables). When associated with data, the data is only accessible to principals explicitly granted access through the DataAccessSpec. Principals with access to the containing resource are not implicitly granted access.
 */
export declare class GoogleCloudDataplexV1DataAccessSpec extends SpeakeasyBase {
    /**
     * Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on data stored within resources.
     */
    readers?: string[];
}

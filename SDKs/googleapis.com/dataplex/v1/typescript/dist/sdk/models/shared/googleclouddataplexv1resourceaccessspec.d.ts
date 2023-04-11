import { SpeakeasyBase } from "../../../internal/utils";
/**
 * ResourceAccessSpec holds the access control configuration to be enforced on the resources, for example, Cloud Storage bucket, BigQuery dataset, BigQuery table.
 */
export declare class GoogleCloudDataplexV1ResourceAccessSpec extends SpeakeasyBase {
    /**
     * Optional. The set of principals to be granted owner role on the resource.
     */
    owners?: string[];
    /**
     * Optional. The format of strings follows the pattern followed by IAM in the bindings. user:{email}, serviceAccount:{email} group:{email}. The set of principals to be granted reader role on the resource.
     */
    readers?: string[];
    /**
     * Optional. The set of principals to be granted writer role on the resource.
     */
    writers?: string[];
}

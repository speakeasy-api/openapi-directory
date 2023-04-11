import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfileField } from "./googleclouddataplexv1dataprofileresultprofilefield";
/**
 * Contains name, type, mode and field type specific profile information.
 */
export declare class GoogleCloudDataplexV1DataProfileResultProfile extends SpeakeasyBase {
    /**
     * List of fields with structural and profile information for each field.
     */
    fields?: GoogleCloudDataplexV1DataProfileResultProfileField[];
}

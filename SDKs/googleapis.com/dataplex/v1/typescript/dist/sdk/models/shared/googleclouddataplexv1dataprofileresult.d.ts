import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudDataplexV1DataProfileResultProfile } from "./googleclouddataplexv1dataprofileresultprofile";
import { GoogleCloudDataplexV1ScannedData } from "./googleclouddataplexv1scanneddata";
/**
 * DataProfileResult defines the output of DataProfileScan. Each field of the table will have field type specific profile result.
 */
export declare class GoogleCloudDataplexV1DataProfileResult extends SpeakeasyBase {
    /**
     * Contains name, type, mode and field type specific profile information.
     */
    profile?: GoogleCloudDataplexV1DataProfileResultProfile;
    /**
     * The count of rows scanned.
     */
    rowCount?: string;
    /**
     * The data scanned during processing (e.g. in incremental DataScan)
     */
    scannedData?: GoogleCloudDataplexV1ScannedData;
}

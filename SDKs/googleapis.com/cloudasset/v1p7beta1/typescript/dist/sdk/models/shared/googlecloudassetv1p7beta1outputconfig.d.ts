import { SpeakeasyBase } from "../../../internal/utils";
import { GoogleCloudAssetV1p7beta1BigQueryDestination } from "./googlecloudassetv1p7beta1bigquerydestination";
import { GoogleCloudAssetV1p7beta1GcsDestination } from "./googlecloudassetv1p7beta1gcsdestination";
/**
 * Output configuration for export assets destination.
 */
export declare class GoogleCloudAssetV1p7beta1OutputConfig extends SpeakeasyBase {
    /**
     * A BigQuery destination for exporting assets to.
     */
    bigqueryDestination?: GoogleCloudAssetV1p7beta1BigQueryDestination;
    /**
     * A Cloud Storage location.
     */
    gcsDestination?: GoogleCloudAssetV1p7beta1GcsDestination;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyDataSourceDetails } from "./googleprivacydlpv2deidentifydatasourcedetails";
/**
 * The results of an Action.
 */
export declare class GooglePrivacyDlpV2ActionDetails extends SpeakeasyBase {
    /**
     * The results of a Deidentify action from an Inspect job.
     */
    deidentifyDetails?: GooglePrivacyDlpV2DeidentifyDataSourceDetails;
}

import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2DeidentifyDataSourceStats } from "./googleprivacydlpv2deidentifydatasourcestats";
import { GooglePrivacyDlpV2RequestedDeidentifyOptions } from "./googleprivacydlpv2requesteddeidentifyoptions";
/**
 * The results of a Deidentify action from an Inspect job.
 */
export declare class GooglePrivacyDlpV2DeidentifyDataSourceDetails extends SpeakeasyBase {
    /**
     * Summary of what was modified during a transformation.
     */
    deidentifyStats?: GooglePrivacyDlpV2DeidentifyDataSourceStats;
    /**
     * De-id options.
     */
    requestedOptions?: GooglePrivacyDlpV2RequestedDeidentifyOptions;
}

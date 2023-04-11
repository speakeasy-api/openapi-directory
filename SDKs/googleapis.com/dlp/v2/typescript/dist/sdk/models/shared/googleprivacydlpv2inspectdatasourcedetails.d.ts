import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2RequestedOptions } from "./googleprivacydlpv2requestedoptions";
import { GooglePrivacyDlpV2Result } from "./googleprivacydlpv2result";
/**
 * The results of an inspect DataSource job.
 */
export declare class GooglePrivacyDlpV2InspectDataSourceDetails extends SpeakeasyBase {
    /**
     * Snapshot of the inspection configuration.
     */
    requestedOptions?: GooglePrivacyDlpV2RequestedOptions;
    /**
     * All result fields mentioned below are updated while the job is processing.
     */
    result?: GooglePrivacyDlpV2Result;
}

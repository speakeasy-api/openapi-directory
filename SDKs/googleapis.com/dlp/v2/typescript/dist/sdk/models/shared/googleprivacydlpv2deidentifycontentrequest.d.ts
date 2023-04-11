import { SpeakeasyBase } from "../../../internal/utils";
import { GooglePrivacyDlpV2ContentItem } from "./googleprivacydlpv2contentitem";
import { GooglePrivacyDlpV2DeidentifyConfig } from "./googleprivacydlpv2deidentifyconfig";
import { GooglePrivacyDlpV2InspectConfig } from "./googleprivacydlpv2inspectconfig";
/**
 * Request to de-identify a ContentItem.
 */
export declare class GooglePrivacyDlpV2DeidentifyContentRequest extends SpeakeasyBase {
    /**
     * The configuration that controls how the data will change.
     */
    deidentifyConfig?: GooglePrivacyDlpV2DeidentifyConfig;
    /**
     * Template to use. Any configuration directly specified in deidentify_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    deidentifyTemplateName?: string;
    /**
     * Configuration description of the scanning process. When used with redactContent only info_types and min_likelihood are currently used.
     */
    inspectConfig?: GooglePrivacyDlpV2InspectConfig;
    /**
     * Template to use. Any configuration directly specified in inspect_config will override those set in the template. Singular fields that are set in this request will replace their corresponding fields in the template. Repeated fields are appended. Singular sub-messages and groups are recursively merged.
     */
    inspectTemplateName?: string;
    item?: GooglePrivacyDlpV2ContentItem;
    /**
     * Deprecated. This field has no effect.
     */
    locationId?: string;
}

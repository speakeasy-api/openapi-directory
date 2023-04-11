import { SpeakeasyBase } from "../../../internal/utils";
import { RevisionTemplate } from "./revisiontemplate";
/**
 * ConfigurationSpec holds the desired state of the Configuration (from the client).
 */
export declare class ConfigurationSpec extends SpeakeasyBase {
    /**
     * RevisionTemplateSpec describes the data a revision should have when created from a template. Based on: https://github.com/kubernetes/api/blob/e771f807/core/v1/types.go#L3179-L3190
     */
    template?: RevisionTemplate;
}

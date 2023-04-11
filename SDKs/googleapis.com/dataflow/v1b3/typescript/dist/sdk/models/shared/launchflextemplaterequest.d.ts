import { SpeakeasyBase } from "../../../internal/utils";
import { LaunchFlexTemplateParameter } from "./launchflextemplateparameter";
/**
 * A request to launch a Cloud Dataflow job from a FlexTemplate.
 */
export declare class LaunchFlexTemplateRequest extends SpeakeasyBase {
    /**
     * Launch FlexTemplate Parameter.
     */
    launchParameter?: LaunchFlexTemplateParameter;
    /**
     * If true, the request is validated but not actually executed. Defaults to false.
     */
    validateOnly?: boolean;
}

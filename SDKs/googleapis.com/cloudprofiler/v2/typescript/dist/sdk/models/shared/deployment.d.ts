import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deployment contains the deployment identification information.
**/
export declare class Deployment extends SpeakeasyBase {
    labels?: Record<string, string>;
    projectId?: string;
    target?: string;
}

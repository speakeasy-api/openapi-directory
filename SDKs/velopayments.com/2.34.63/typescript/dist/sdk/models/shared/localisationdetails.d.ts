import { SpeakeasyBase } from "../../../internal/utils";
export declare class LocalisationDetails extends SpeakeasyBase {
    /**
     * name to value map containing any named parameters that appear in the message template
     */
    parameters?: Record<string, string>;
    /**
     * the English language message template used to construct the error message
     */
    template?: string;
}

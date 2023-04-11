import { SpeakeasyBase } from "../../../internal/utils";
export declare class ManagedInstanceVersion extends SpeakeasyBase {
    /**
     * [Output Only] The intended template of the instance. This field is empty when current_action is one of { DELETING, ABANDONING }.
     */
    instanceTemplate?: string;
    /**
     * [Output Only] Name of the version.
     */
    name?: string;
}

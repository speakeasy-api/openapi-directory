import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The `cmd` you sent in the request.
 */
export declare enum ControlResponseCommandEnum {
    Cancel = "cancel",
    TriggerNextEvent = "trigger_next_event"
}
/**
 * Success
 */
export declare class ControlResponse extends SpeakeasyBase {
    /**
     * The `cmd` you sent in the request.
     */
    command?: ControlResponseCommandEnum;
    /**
     * `cmd` | Code | Description
     *
     * @remarks
     * -- | -- | --
     * Any | 0 | Success
     *
     */
    status?: string;
}

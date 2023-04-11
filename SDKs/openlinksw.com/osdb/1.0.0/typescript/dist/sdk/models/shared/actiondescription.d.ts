import { SpeakeasyBase } from "../../../internal/utils";
import { EntryPoint } from "./entrypoint";
export declare class ActionDescription extends SpeakeasyBase {
    /**
     * A unique one word identifier for the action.
     */
    actionId: string;
    /**
     * A short description of the action.
     */
    description?: string;
    entryPoint: EntryPoint;
}

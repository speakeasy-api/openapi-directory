import { SpeakeasyBase } from "../../../internal/utils";
import { SandboxUser } from "./sandboxuser";
/**
 * Sandbox model
 */
export declare class Sandbox extends SpeakeasyBase {
    /**
     * Sandbox id
     */
    sandboxId: string;
    /**
     * List of users
     */
    users?: SandboxUser[];
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A user
 */
export declare class InMemoryUser extends SpeakeasyBase {
    /**
     * Email of the user
     */
    email: string;
    /**
     * Metadata of the user
     */
    metadata: Record<string, string>;
    /**
     * Name of the user
     */
    name: string;
    /**
     * Password of the user (BCrypt hash)
     */
    password: string;
}

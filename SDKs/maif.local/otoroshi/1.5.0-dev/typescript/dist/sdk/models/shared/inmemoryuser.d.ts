import { SpeakeasyBase } from "../../../internal/utils";
/**
 * A user
**/
export declare class InMemoryUser extends SpeakeasyBase {
    email: string;
    metadata: Record<string, string>;
    name: string;
    password: string;
}

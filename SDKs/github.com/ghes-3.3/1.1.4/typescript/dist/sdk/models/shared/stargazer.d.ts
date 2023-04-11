import { SpeakeasyBase } from "../../../internal/utils";
import { NullableSimpleUser } from "./nullablesimpleuser";
/**
 * Stargazer
 */
export declare class Stargazer extends SpeakeasyBase {
    starredAt: Date;
    /**
     * A GitHub user.
     */
    user: NullableSimpleUser;
}

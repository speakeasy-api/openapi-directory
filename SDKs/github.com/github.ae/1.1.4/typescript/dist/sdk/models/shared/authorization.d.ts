import { SpeakeasyBase } from "../../../internal/utils";
import { NullableScopedInstallation } from "./nullablescopedinstallation";
import { NullableSimpleUser } from "./nullablesimpleuser";
export declare class AuthorizationApp extends SpeakeasyBase {
    clientId: string;
    name: string;
    url: string;
}
/**
 * The authorization for an OAuth app, GitHub App, or a Personal Access Token.
 */
export declare class Authorization extends SpeakeasyBase {
    app: AuthorizationApp;
    createdAt: Date;
    expiresAt: Date;
    fingerprint: string;
    hashedToken: string;
    id: number;
    installation?: NullableScopedInstallation;
    note: string;
    noteUrl: string;
    /**
     * A list of scopes that this authorization is in.
     */
    scopes: string[];
    token: string;
    tokenLastEight: string;
    updatedAt: Date;
    url: string;
    /**
     * A GitHub user.
     */
    user?: NullableSimpleUser;
}

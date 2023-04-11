import { SpeakeasyBase } from "../../../internal/utils";
/**
 * successful operation
 */
export declare class RefreshTokenInfoResponse extends SpeakeasyBase {
    clientId: string;
    hubDomain?: string;
    hubId: number;
    scopes: string[];
    token: string;
    tokenType: string;
    user?: string;
    userId: number;
}

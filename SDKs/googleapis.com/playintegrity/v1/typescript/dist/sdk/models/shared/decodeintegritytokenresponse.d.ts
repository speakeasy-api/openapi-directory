import { SpeakeasyBase } from "../../../internal/utils";
import { TokenPayloadExternal } from "./tokenpayloadexternal";
/**
 * Response containing the decoded integrity payload.
 */
export declare class DecodeIntegrityTokenResponse extends SpeakeasyBase {
    /**
     * Contains basic app information and integrity signals like device attestation and licensing details.
     */
    tokenPayloadExternal?: TokenPayloadExternal;
}

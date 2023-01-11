import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TestnetBurnTokenRequest extends SpeakeasyBase {
    request: shared.BurnTokenRequest;
}
export declare class TestnetBurnTokenResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.ErrorT;
    statusCode: number;
    burnTokenResponse?: shared.BurnTokenResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetIllustratorsIllustratorRequest extends SpeakeasyBase {
    illustrator: string;
}
export declare class GetIllustratorsIllustratorResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Get the cards containing the specified illustrator
     */
    stringEndpoint?: shared.StringEndpoint;
}

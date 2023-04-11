import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class GetRenderSecurity extends SpeakeasyBase {
    developerKey: string;
}
export declare class GetRenderRequest extends SpeakeasyBase {
    /**
     * The id of the timeline render task in UUID format
     */
    id: string;
}
export declare class GetRenderResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * The render status details
     */
    renderResponse?: shared.RenderResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

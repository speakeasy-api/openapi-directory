import { SpeakeasyBase } from "../../../internal/utils";
import { RenderResponseData } from "./renderresponsedata";
/**
 * The response received after a [render status request](#get-render-status) is submitted. The response includes  details about status of a render and the output URL.
 */
export declare class RenderResponse extends SpeakeasyBase {
    /**
     * `OK` or an error message.
     */
    message: string;
    /**
     * The response data returned with the [RenderResponse](#tocs_renderresponse) including status and URL.
     */
    response: RenderResponseData;
    /**
     * `true` if status available, else `false`.
     */
    success: boolean;
}

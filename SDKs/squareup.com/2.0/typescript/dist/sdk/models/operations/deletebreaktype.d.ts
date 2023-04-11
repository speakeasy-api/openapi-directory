import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class DeleteBreakTypeSecurity extends SpeakeasyBase {
    oauth2: string;
}
export declare class DeleteBreakTypeRequest extends SpeakeasyBase {
    /**
     * The UUID for the `BreakType` being deleted.
     */
    id: string;
}
export declare class DeleteBreakTypeResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * Success
     */
    deleteBreakTypeResponse?: shared.DeleteBreakTypeResponse;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

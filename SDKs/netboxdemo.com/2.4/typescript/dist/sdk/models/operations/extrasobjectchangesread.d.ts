import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ExtrasObjectChangesReadRequest extends SpeakeasyBase {
    /**
     * A unique integer value identifying this object change.
     */
    id: number;
}
export declare class ExtrasObjectChangesReadResponse extends SpeakeasyBase {
    contentType: string;
    objectChange?: shared.ObjectChange;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

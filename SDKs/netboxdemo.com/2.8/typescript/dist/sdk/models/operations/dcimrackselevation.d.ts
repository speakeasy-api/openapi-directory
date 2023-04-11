import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare enum DcimRacksElevationFaceEnum {
    Front = "front",
    Rear = "rear"
}
export declare enum DcimRacksElevationRenderEnum {
    Json = "json",
    Svg = "svg"
}
export declare class DcimRacksElevationRequest extends SpeakeasyBase {
    exclude?: number;
    expandDevices?: boolean;
    face?: DcimRacksElevationFaceEnum;
    /**
     * A unique integer value identifying this rack.
     */
    id: number;
    includeImages?: boolean;
    legendWidth?: number;
    q?: string;
    render?: DcimRacksElevationRenderEnum;
    unitHeight?: number;
    unitWidth?: number;
}
export declare class DcimRacksElevationResponse extends SpeakeasyBase {
    contentType: string;
    rackUnits?: shared.RackUnit[];
    statusCode: number;
    rawResponse?: AxiosResponse;
}

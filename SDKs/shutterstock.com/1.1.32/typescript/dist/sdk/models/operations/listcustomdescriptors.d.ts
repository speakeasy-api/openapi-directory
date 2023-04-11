import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class ListCustomDescriptorsSecurity extends SpeakeasyBase {
    basic?: shared.SchemeBasic;
    customerAccessCode?: string;
}
export declare class ListCustomDescriptorsRequest extends SpeakeasyBase {
    /**
     * Show descriptors that contain the specified band (case-sentsitive)
     */
    bandId?: string;
    /**
     * Show descriptors with the specified band name (case-sensitive)
     */
    bandName?: string;
    /**
     * Show descriptors with the specified IDs (case-sensitive)
     */
    id?: string[];
    /**
     * Show descriptors with the specified instrument ID (case-sensitive)
     */
    instrumentId?: string;
    /**
     * Show descriptors with the specified instrument name (case-sensitive)
     */
    instrumentName?: string;
    /**
     * Show descriptors with the specified name (case-sensitive)
     */
    name?: string;
    /**
     * Page number
     */
    page?: number;
    /**
     * Number of results per page
     */
    perPage?: number;
    /**
     * Show descriptors with an average render speed that is greater than or equal to the specified value
     */
    renderSpeedOver?: number;
    /**
     * Show descriptors with the specified tag, such as Cinematic or Roomy (case-sensitive)
     */
    tag?: string;
    /**
     * Show descriptors whose tempo range includes the specified tempo in beats per minute
     */
    tempo?: number;
    /**
     * Show descriptors that have a tempo range that includes the specified tempo in beats per minute
     */
    tempoFrom?: number;
    /**
     * Show descriptors with a tempo that is less than or equal to the specified number
     */
    tempoTo?: number;
}
export declare class ListCustomDescriptorsResponse extends SpeakeasyBase {
    contentType: string;
    /**
     * OK
     */
    descriptorsListResult?: shared.DescriptorsListResult;
    statusCode: number;
    rawResponse?: AxiosResponse;
}

import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
import { AxiosResponse } from "axios";
export declare class PostSpinsRequestBody extends SpeakeasyBase {
    artist: string;
    composer?: string;
    duration?: number;
    genre?: string;
    isrc?: string;
    label?: string;
    /**
     * Only when automation params are configured with the "Pass through" mode.
     *
     * @remarks
     * Enables "live assist" mode. Default mode is "full automation".
     *
     */
    live?: boolean;
    release?: string;
    song: string;
    start?: Date;
}
export declare class PostSpinsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * Failed to create the object for unknown reason.
     */
    error?: shared.ErrorT;
    /**
     * The new created Spin.
     */
    spin?: shared.Spin;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * Validation failed.
     */
    validationErrors?: shared.ValidationError[];
}

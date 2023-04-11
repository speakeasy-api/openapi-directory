import { SpeakeasyBase } from "../../../internal/utils";
/**
 * An instance serial console output.
 */
export declare class SerialPortOutput extends SpeakeasyBase {
    /**
     * [Output Only] The contents of the console output.
     */
    contents?: string;
    /**
     * [Output Only] Type of the resource. Always compute#serialPortOutput for serial port output.
     */
    kind?: string;
    /**
     * [Output Only] The position of the next byte of content, regardless of whether the content exists, following the output returned in the `contents` property. Use this value in the next request as the start parameter.
     */
    next?: string;
    /**
     * [Output Only] Server-defined URL for this resource.
     */
    selfLink?: string;
    /**
     * The starting byte position of the output that was returned. This should match the start parameter sent with the request. If the serial console output exceeds the size of the buffer (1 MB), older output is overwritten by newer content. The output start value will indicate the byte position of the output that was returned, which might be different than the `start` value that was specified in the request.
     */
    start?: string;
}

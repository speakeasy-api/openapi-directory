import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Parameters specific to media downloads.
 */
export declare class GdataDownloadParameters extends SpeakeasyBase {
    /**
     * A boolean to be returned in the response to Scotty. Allows/disallows gzip encoding of the payload content when the server thinks it's advantageous (hence, does not guarantee compression) which allows Scotty to GZip the response to the client.
     */
    allowGzipCompression?: boolean;
    /**
     * Determining whether or not Apiary should skip the inclusion of any Content-Range header on its response to Scotty.
     */
    ignoreRange?: boolean;
}

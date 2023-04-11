import { SpeakeasyBase } from "../../../internal/utils";
/**
 * SslCerts insert request.
 */
export declare class SslCertsInsertRequest extends SpeakeasyBase {
    /**
     * User supplied name. Must be a distinct name from the other certificates for this instance.
     */
    commonName?: string;
}

import { SpeakeasyBase } from "../../../internal/utils";
/**
 * If applicable, location in the request that this error relates to. This
 *
 * @remarks
 * may be a parameter in the query string, or a an attribute in the
 * request body.
 *
 */
export declare class ErrorObjectSource extends SpeakeasyBase {
    /**
     * If this error relates to a query parameter, the name of the
     *
     * @remarks
     * parameter.
     *
     */
    parameter?: string;
    /**
     * If this error relates to an attribute in the request body, a
     *
     * @remarks
     * rfc-6901 JSON pointer to the attribute.
     *
     */
    pointer?: string;
}
/**
 * Provides information about an error processing a request.
 *
 * @remarks
 *
 */
export declare class ErrorObject extends SpeakeasyBase {
    /**
     * A detailed description of this error. This should be considered unique
     *
     * @remarks
     * to individual occurrences of an error and subject to change. It is
     * useful for debugging purposes.
     *
     */
    detail: string;
    /**
     * If applicable, location in the request that this error relates to. This
     *
     * @remarks
     * may be a parameter in the query string, or a an attribute in the
     * request body.
     *
     */
    source?: ErrorObjectSource;
    /**
     * The HTTP status code associated with this error. This can also be
     *
     * @remarks
     * obtained from the response headers. The status indicates the broad type
     * of error according to HTTP semantics.
     *
     */
    status: string;
    /**
     * A short description of this error. This should be stable across
     *
     * @remarks
     * multiple occurrences of this type of error and typically expands on the
     * reason for the status code.
     *
     */
    title: string;
}

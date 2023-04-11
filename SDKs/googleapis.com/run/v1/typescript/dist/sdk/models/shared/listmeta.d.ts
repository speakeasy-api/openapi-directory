import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Metadata for synthetic resources like List. In Cloud Run, all List Resources Responses will have a ListMeta instead of ObjectMeta.
 */
export declare class ListMeta extends SpeakeasyBase {
    /**
     * Continuation token is a value emitted when the count of items is larger than the user/system limit. To retrieve the next page of items, pass the value of `continue` as the next request's `page_token`.
     */
    continue?: string;
    /**
     * Opaque string that identifies the server's internal version of this object. It can be used by clients to determine when objects have changed. If the message is passed back to the server, it must be left unmodified. https://git.k8s.io/community/contributors/devel/api-conventions.md#concurrency-control-and-consistency
     */
    resourceVersion?: string;
    /**
     * URL representing this object.
     */
    selfLink?: string;
}

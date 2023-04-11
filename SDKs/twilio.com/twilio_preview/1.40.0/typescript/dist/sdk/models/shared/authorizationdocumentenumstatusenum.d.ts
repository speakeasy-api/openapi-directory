/**
 * Status of an instance resource. It can hold one of the values: 1. opened 2. signing, 3. signed LOA, 4. canceled, 5. failed. See the section entitled [Status Values](https://www.twilio.com/docs/api/phone-numbers/hosted-number-authorization-documents#status-values) for more information on each of these statuses.
 */
export declare enum AuthorizationDocumentEnumStatusEnum {
    Opened = "opened",
    Signing = "signing",
    Signed = "signed",
    Canceled = "canceled",
    Failed = "failed"
}

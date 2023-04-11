import { SpeakeasyBase } from "../../../internal/utils";
export declare enum EmailResultEnum {
    Deliverable = "deliverable",
    NotDeliverable = "not_deliverable"
}
export declare class Email extends SpeakeasyBase {
    /**
     * Returns `true` if this domain accepts all emails regardless of username
     */
    catchall: boolean;
    /**
     * Returns `true` if the email can be delivered
     */
    deliverable: boolean;
    /**
     * Returns `true` if email comes from a disposable email service like temp-mail
     */
    disposable: boolean;
    /**
     * Returns `true` if the email originates from a free service like Outlook or Gmail.
     */
    free: boolean;
    result: EmailResultEnum;
    /**
     * Returns `true` if email address represents an organisational role like `admin`, `support`, `postmaster` etc
     */
    role: boolean;
}

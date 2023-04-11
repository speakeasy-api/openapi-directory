import { SpeakeasyBase } from "../../../internal/utils";
/**
 * The additional direct deposit model
 */
export declare class DirectDepositAdditionalDirectDeposit extends SpeakeasyBase {
    /**
     * Account number, entered without special characters and spaces. <br  />Max length: 17<br />
     */
    accountNumber?: string;
    /**
     * Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1<br />
     */
    accountType?: string;
    /**
     * Amount value to be deposited to the account.<br  />Decimal (12,2)<br />
     */
    amount?: number;
    /**
     * Amount type to indicate the context of the amount. Common values are *F* (FLAT), *F-* (Net Minus), *P* (Percent). <br  /> Max length: 5<br />
     */
    amountType?: string;
    /**
     * Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />
     */
    blockSpecial?: boolean;
    /**
     * Indicates if account will not pre-note.<br />
     */
    isSkipPreNote?: boolean;
    /**
     * Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />
     */
    nameOnAccount?: string;
    /**
     * Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.<br />
     */
    preNoteDate?: string;
    /**
     * ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9<br />
     */
    routingNumber?: string;
}
/**
 * The main Direct Deposit account.
 */
export declare class DirectDepositMainDirectDeposit extends SpeakeasyBase {
    /**
     * Account number, entered without special characters and spaces. <br  />Max length: 17
     */
    accountNumber?: string;
    /**
     * Account type. Valid values are *C* (Checking), *S* (Saving), *P* (Pay Card). <br   />Max length: 1
     */
    accountType?: string;
    /**
     * Indicates if direct deposit should be blocked when special check types such as Bonus are processed.<br />
     */
    blockSpecial?: boolean;
    /**
     * Indicates if account will not pre-note.
     */
    isSkipPreNote?: boolean;
    /**
     * Name on the bank account. Defaults to employee's name. <br  />Max length: 30<br />
     */
    nameOnAccount?: string;
    /**
     * Date to end the pre-note of the account. Common formats include *MM-DD-CCYY*, *CCYY-MM-DD*.
     */
    preNoteDate?: string;
    /**
     * ABA Transit Routing Number, entered without dashes or spaces. <br  />Max length: 9
     */
    routingNumber?: string;
}
/**
 * The Direct Deposit model
 */
export declare class DirectDeposit extends SpeakeasyBase {
    /**
     * Additional Direct Deposits that are not the main Direct Deposit.
     */
    additionalDirectDeposit?: DirectDepositAdditionalDirectDeposit[];
    /**
     * The main Direct Deposit account.
     */
    mainDirectDeposit?: DirectDepositMainDirectDeposit;
}

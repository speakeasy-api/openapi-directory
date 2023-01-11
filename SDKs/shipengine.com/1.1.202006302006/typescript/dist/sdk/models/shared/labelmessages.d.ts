import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Custom messages to print on the shipping label for the package.  These are typically used to print invoice numbers, product numbers, or other internal reference numbers.  Not all carriers support label messages. The number of lines and the maximum length of each line also varies by carrier.
 *
 * |Carrier            |Max lines |Max line length
 * |-------------------|----------|--------------------
 * |USPS (Stamps.com)  |3         |60
 * |FedEx              |3         |35 for the first line. 30 for additional lines.
 * |UPS                |2         |35
 * |OnTrac             |2         |25
 *
**/
export declare class LabelMessages extends SpeakeasyBase {
    reference1: string;
    reference2: string;
    reference3: string;
}

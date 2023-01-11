import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// LabelMessages
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
export class LabelMessages extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=reference1" })
  reference1: string;

  @SpeakeasyMetadata({ data: "json, name=reference2" })
  reference2: string;

  @SpeakeasyMetadata({ data: "json, name=reference3" })
  reference3: string;
}

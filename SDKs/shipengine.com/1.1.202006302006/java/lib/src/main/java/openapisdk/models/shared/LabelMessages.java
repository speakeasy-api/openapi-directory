package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;

/**
 * LabelMessages
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
public class LabelMessages {
    @JsonProperty("reference1")
    public String reference1;
    public LabelMessages withReference1(String reference1) {
        this.reference1 = reference1;
        return this;
    }
    @JsonProperty("reference2")
    public String reference2;
    public LabelMessages withReference2(String reference2) {
        this.reference2 = reference2;
        return this;
    }
    @JsonProperty("reference3")
    public String reference3;
    public LabelMessages withReference3(String reference3) {
        this.reference3 = reference3;
        return this;
    }
}
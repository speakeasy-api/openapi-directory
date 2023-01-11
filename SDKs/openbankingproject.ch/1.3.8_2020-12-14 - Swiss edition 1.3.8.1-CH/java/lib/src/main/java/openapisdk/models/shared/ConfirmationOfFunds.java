package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ConfirmationOfFunds
 * JSON Request body for the "Confirmation of funds service".
 * 
 * <table> 
 * <tr> 
 *   <td>cardNumber</td> 
 *   <td>String </td>
 *   <td>Optional</td>
 *   <td>Card Number of the card issued by the PIISP. Should be delivered if available.</td>
 * </tr>
 * <tr>
 *   <td>account</td>
 *   <td> Account Reference</td>
 *   <td>Mandatory</td>
 *   <td>PSU's account number.</td>
 * </tr>
 * <tr>
 *   <td>payee</td>
 *   <td>Max70Text</td>
 *   <td>Optional</td>
 *   <td>The merchant where the card is accepted as an information to the PSU.</td>
 * </tr>
 * <tr>
 *   <td>instructedAmount</td>
 *   <td>Amount</td>
 *   <td>Mandatory</td>
 *   <td>Transaction amount to be checked within the funds check mechanism.</td>
 * </tr>
 * </table>
 * 
**/
public class ConfirmationOfFunds {
    @JsonProperty("account")
    public AccountReference16Ch account;
    public ConfirmationOfFunds withAccount(AccountReference16Ch account) {
        this.account = account;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cardNumber")
    public String cardNumber;
    public ConfirmationOfFunds withCardNumber(String cardNumber) {
        this.cardNumber = cardNumber;
        return this;
    }
    @JsonProperty("instructedAmount")
    public Amount instructedAmount;
    public ConfirmationOfFunds withInstructedAmount(Amount instructedAmount) {
        this.instructedAmount = instructedAmount;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("payee")
    public String payee;
    public ConfirmationOfFunds withPayee(String payee) {
        this.payee = payee;
        return this;
    }
}
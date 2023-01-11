import dataclasses
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from ..shared import accountingcustomerparty as shared_accountingcustomerparty
from ..shared import accountingsupplierparty as shared_accountingsupplierparty
from ..shared import allowancecharge as shared_allowancecharge
from ..shared import delivery as shared_delivery
from ..shared import currencycode_enum as shared_currencycode_enum
from ..shared import invoiceline as shared_invoiceline
from ..shared import paymentmeans as shared_paymentmeans
from ..shared import taxsubtotal as shared_taxsubtotal

class InvoiceTypeOfInvoiceEnum(str, Enum):
    THREE_HUNDRED_AND_EIGHTY = "380"
    THREE_HUNDRED_AND_EIGHTY_ONE = "381"
    THREE_HUNDRED_AND_EIGHTY_FOUR = "384"

class InvoicePaymentMeansCodeEnum(str, Enum):
    ONLINE_PAYMENT_SERVICE = "online_payment_service"
    BANK_CARD = "bank_card"
    DIRECT_DEBIT = "direct_debit"
    STANDING_AGREEMENT = "standing_agreement"
    CREDIT_TRANSFER = "credit_transfer"
    SE_BANKGIRO = "se_bankgiro"
    SE_PLUSGIRO = "se_plusgiro"
    AUNZ_NPP = "aunz_npp"
    UNKNOWN = ""
    ONE = "1"
    THIRTY = "30"
    THIRTY_ONE = "31"
    FORTY_TWO = "42"
    FORTY_EIGHT = "48"
    FORTY_NINE = "49"
    FIFTY_SEVEN = "57"
    FIFTY_EIGHT = "58"


@dataclass_json
@dataclasses.dataclass
class InvoiceThePaymentTerms:
    r"""InvoiceThePaymentTerms
    The payment terms of the invoice.
    """
    
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    
class InvoiceTaxExemptReasonEnum(str, Enum):
    EXPORT = "export"
    REVERSE_CHARGE = "reverse_charge"
    ZERO_RATED = "zero_rated"
    EXEMPT = "exempt"
    OUTSIDE_SCOPE = "outside_scope"
    INTRA_COMMUNITY = "intra_community"

class InvoiceTaxSystemEnum(str, Enum):
    TAX_LINE_AMOUNTS = "tax_line_amounts"
    TAX_LINE_PERCENTAGES = "tax_line_percentages"
    TAX_NO_TAX = "tax_no_tax"


@dataclass_json
@dataclasses.dataclass
class Invoice:
    r"""Invoice
    The invoice to send.  Provide either invoice, or invoiceData, but not both.
    """
    
    accounting_customer_party: shared_accountingcustomerparty.AccountingCustomerParty = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingCustomerParty') }})
    amount_including_vat: float = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('amountIncludingVat') }})
    invoice_lines: list[shared_invoiceline.InvoiceLine] = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceLines') }})
    invoice_number: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceNumber') }})
    issue_date: str = dataclasses.field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('issueDate') }})
    accounting_cost: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingCost') }})
    accounting_supplier_party: Optional[shared_accountingsupplierparty.AccountingSupplierParty] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('accountingSupplierParty') }})
    allowance_charges: Optional[list[shared_allowancecharge.AllowanceCharge]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowanceCharges') }})
    billing_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('billingReference') }})
    buyer_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('buyerReference') }})
    consumer_tax_mode: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerTaxMode') }})
    contract_document_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contractDocumentReference') }})
    delivery: Optional[shared_delivery.Delivery] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('delivery') }})
    document_currency_code: Optional[shared_currencycode_enum.CurrencyCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('documentCurrencyCode') }})
    due_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dueDate') }})
    invoice_period: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoicePeriod') }})
    invoice_type: Optional[InvoiceTypeOfInvoiceEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invoiceType') }})
    note: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('note') }})
    order_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('orderReference') }})
    payment_means_array: Optional[list[shared_paymentmeans.PaymentMeans]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansArray') }})
    payment_means_bic: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansBic') }})
    payment_means_code: Optional[InvoicePaymentMeansCodeEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansCode') }})
    payment_means_iban: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansIban') }})
    payment_means_payment_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentMeansPaymentId') }})
    payment_terms: Optional[InvoiceThePaymentTerms] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paymentTerms') }})
    prepaid_amount: Optional[float] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('prepaidAmount') }})
    project_reference: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('projectReference') }})
    sales_order_id: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('salesOrderId') }})
    tax_exempt_reason: Optional[InvoiceTaxExemptReasonEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxExemptReason') }})
    tax_point_date: Optional[str] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxPointDate') }})
    tax_subtotals: Optional[list[shared_taxsubtotal.TaxSubtotal]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxSubtotals') }})
    tax_system: Optional[InvoiceTaxSystemEnum] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taxSystem') }})
    ubl_extensions: Optional[list[str]] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ublExtensions') }})
    vat_reverse_charge: Optional[bool] = dataclasses.field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vatReverseCharge') }})
    

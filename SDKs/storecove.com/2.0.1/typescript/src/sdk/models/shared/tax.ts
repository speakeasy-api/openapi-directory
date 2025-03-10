import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CountryEnum } from "./countryenum";


export enum TaxTaxCategoryEnum {
    Standard = "standard",
    ZeroRated = "zero_rated",
    ReverseCharge = "reverse_charge",
    IntraCommunity = "intra_community",
    Exempt = "exempt",
    Export = "export",
    OutsideScope = "outside_scope",
    Regulation33Exempt = "regulation33_exempt",
    Nonregulation33Exempt = "nonregulation33_exempt",
    DeemedSupply = "deemed_supply",
    SrcaS = "srca_s",
    SrcaC = "srca_c",
    NotRegistered = "not_registered",
    SalesTax = "sales_tax",
    SalesTaxWork = "sales_tax_work",
    ServiceTax = "service_tax",
    ServiceTaxImport = "service_tax_import",
    SalesToExportMarket = "sales_to_export_market",
    SalesToSpecialArea = "sales_to_special_area",
    SalesToDesignatedArea = "sales_to_designated_area",
    ExemptionScheduleA = "exemption_schedule_a",
    ExemptionScheduleB = "exemption_schedule_b",
    ExemptionScheduleCA = "exemption_schedule_c_a",
    ExemptionScheduleCB = "exemption_schedule_c_b",
    ExemptionScheduleCC = "exemption_schedule_c_c",
    ExemptionServiceTax = "exemption_service_tax"
}


export class Tax extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=amount" })
  amount?: number;

  @SpeakeasyMetadata({ data: "json, name=category" })
  category?: TaxTaxCategoryEnum;

  @SpeakeasyMetadata({ data: "json, name=country" })
  country: CountryEnum;

  @SpeakeasyMetadata({ data: "json, name=percentage" })
  percentage?: number;
}

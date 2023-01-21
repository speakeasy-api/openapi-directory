package shared

type LocaleParamEnum string

const (
	LocaleParamEnumSku                 LocaleParamEnum = "sku"
	LocaleParamEnumBarcode             LocaleParamEnum = "barcode"
	LocaleParamEnumBrand               LocaleParamEnum = "brand"
	LocaleParamEnumName                LocaleParamEnum = "name"
	LocaleParamEnumDescription         LocaleParamEnum = "description"
	LocaleParamEnumVariants            LocaleParamEnum = "variants"
	LocaleParamEnumOptionName          LocaleParamEnum = "option_name"
	LocaleParamEnumCustomFields        LocaleParamEnum = "custom_fields"
	LocaleParamEnumCustomFieldsSelects LocaleParamEnum = "custom_fields_selects"
)

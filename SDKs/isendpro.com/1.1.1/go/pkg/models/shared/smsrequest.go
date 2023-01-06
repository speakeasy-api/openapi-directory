package shared

type SmsRequestGmtZoneEnum string

const (
	SMSRequestGmtZoneEnumPacificMidway               SmsRequestGmtZoneEnum = "Pacific/Midway"
	SMSRequestGmtZoneEnumAmericaAdak                 SmsRequestGmtZoneEnum = "America/Adak"
	SMSRequestGmtZoneEnumEtcGmtPlus10                SmsRequestGmtZoneEnum = "Etc/GMT+10"
	SMSRequestGmtZoneEnumPacificMarquesas            SmsRequestGmtZoneEnum = "Pacific/Marquesas"
	SMSRequestGmtZoneEnumPacificGambier              SmsRequestGmtZoneEnum = "Pacific/Gambier"
	SMSRequestGmtZoneEnumAmericaAnchorage            SmsRequestGmtZoneEnum = "America/Anchorage"
	SMSRequestGmtZoneEnumAmericaEnsenada             SmsRequestGmtZoneEnum = "America/Ensenada"
	SMSRequestGmtZoneEnumEtcGmtPlus8                 SmsRequestGmtZoneEnum = "Etc/GMT+8"
	SMSRequestGmtZoneEnumAmericaLosAngeles           SmsRequestGmtZoneEnum = "America/Los_Angeles"
	SMSRequestGmtZoneEnumAmericaDenver               SmsRequestGmtZoneEnum = "America/Denver"
	SMSRequestGmtZoneEnumAmericaChihuahua            SmsRequestGmtZoneEnum = "America/Chihuahua"
	SMSRequestGmtZoneEnumAmericaDawsonCreek          SmsRequestGmtZoneEnum = "America/Dawson_Creek"
	SMSRequestGmtZoneEnumAmericaBelize               SmsRequestGmtZoneEnum = "America/Belize"
	SMSRequestGmtZoneEnumAmericaCancun               SmsRequestGmtZoneEnum = "America/Cancun"
	SMSRequestGmtZoneEnumChileEasterIsland           SmsRequestGmtZoneEnum = "Chile/EasterIsland"
	SMSRequestGmtZoneEnumAmericaChicago              SmsRequestGmtZoneEnum = "America/Chicago"
	SMSRequestGmtZoneEnumAmericaNewYork              SmsRequestGmtZoneEnum = "America/New_York"
	SMSRequestGmtZoneEnumAmericaHavana               SmsRequestGmtZoneEnum = "America/Havana"
	SMSRequestGmtZoneEnumAmericaBogota               SmsRequestGmtZoneEnum = "America/Bogota"
	SMSRequestGmtZoneEnumAmericaCaracas              SmsRequestGmtZoneEnum = "America/Caracas"
	SMSRequestGmtZoneEnumAmericaSantiago             SmsRequestGmtZoneEnum = "America/Santiago"
	SMSRequestGmtZoneEnumAmericaLaPaz                SmsRequestGmtZoneEnum = "America/La_Paz"
	SMSRequestGmtZoneEnumAtlanticStanley             SmsRequestGmtZoneEnum = "Atlantic/Stanley"
	SMSRequestGmtZoneEnumAmericaCampoGrande          SmsRequestGmtZoneEnum = "America/Campo_Grande"
	SMSRequestGmtZoneEnumAmericaGooseBay             SmsRequestGmtZoneEnum = "America/Goose_Bay"
	SMSRequestGmtZoneEnumAmericaGlaceBay             SmsRequestGmtZoneEnum = "America/Glace_Bay"
	SMSRequestGmtZoneEnumAmericaStJohns              SmsRequestGmtZoneEnum = "America/St_Johns"
	SMSRequestGmtZoneEnumAmericaAraguaina            SmsRequestGmtZoneEnum = "America/Araguaina"
	SMSRequestGmtZoneEnumAmericaMontevideo           SmsRequestGmtZoneEnum = "America/Montevideo"
	SMSRequestGmtZoneEnumAmericaMiquelon             SmsRequestGmtZoneEnum = "America/Miquelon"
	SMSRequestGmtZoneEnumAmericaGodthab              SmsRequestGmtZoneEnum = "America/Godthab"
	SMSRequestGmtZoneEnumAmericaArgentinaBuenosAires SmsRequestGmtZoneEnum = "America/Argentina/Buenos_Aires"
	SMSRequestGmtZoneEnumAmericaSaoPaulo             SmsRequestGmtZoneEnum = "America/Sao_Paulo"
	SMSRequestGmtZoneEnumAmericaNoronha              SmsRequestGmtZoneEnum = "America/Noronha"
	SMSRequestGmtZoneEnumAtlanticCapeVerde           SmsRequestGmtZoneEnum = "Atlantic/Cape_Verde"
	SMSRequestGmtZoneEnumAtlanticAzores              SmsRequestGmtZoneEnum = "Atlantic/Azores"
	SMSRequestGmtZoneEnumEuropeBelfast               SmsRequestGmtZoneEnum = "Europe/Belfast"
	SMSRequestGmtZoneEnumEuropeDublin                SmsRequestGmtZoneEnum = "Europe/Dublin"
	SMSRequestGmtZoneEnumEuropeLisbon                SmsRequestGmtZoneEnum = "Europe/Lisbon"
	SMSRequestGmtZoneEnumEuropeLondon                SmsRequestGmtZoneEnum = "Europe/London"
	SMSRequestGmtZoneEnumAfricaAbidjan               SmsRequestGmtZoneEnum = "Africa/Abidjan"
	SMSRequestGmtZoneEnumEuropeAmsterdam             SmsRequestGmtZoneEnum = "Europe/Amsterdam"
	SMSRequestGmtZoneEnumEuropeBelgrade              SmsRequestGmtZoneEnum = "Europe/Belgrade"
	SMSRequestGmtZoneEnumEuropeBrussels              SmsRequestGmtZoneEnum = "Europe/Brussels"
	SMSRequestGmtZoneEnumAfricaAlgiers               SmsRequestGmtZoneEnum = "Africa/Algiers"
	SMSRequestGmtZoneEnumAfricaWindhoek              SmsRequestGmtZoneEnum = "Africa/Windhoek"
	SMSRequestGmtZoneEnumAsiaBeirut                  SmsRequestGmtZoneEnum = "Asia/Beirut"
	SMSRequestGmtZoneEnumAfricaCairo                 SmsRequestGmtZoneEnum = "Africa/Cairo"
	SMSRequestGmtZoneEnumAsiaGaza                    SmsRequestGmtZoneEnum = "Asia/Gaza"
	SMSRequestGmtZoneEnumAfricaBlantyre              SmsRequestGmtZoneEnum = "Africa/Blantyre"
	SMSRequestGmtZoneEnumAsiaJerusalem               SmsRequestGmtZoneEnum = "Asia/Jerusalem"
	SMSRequestGmtZoneEnumEuropeMinsk                 SmsRequestGmtZoneEnum = "Europe/Minsk"
	SMSRequestGmtZoneEnumAsiaDamascus                SmsRequestGmtZoneEnum = "Asia/Damascus"
	SMSRequestGmtZoneEnumEuropeMoscow                SmsRequestGmtZoneEnum = "Europe/Moscow"
	SMSRequestGmtZoneEnumAfricaAddisAbaba            SmsRequestGmtZoneEnum = "Africa/Addis_Ababa"
	SMSRequestGmtZoneEnumAsiaTehran                  SmsRequestGmtZoneEnum = "Asia/Tehran"
	SMSRequestGmtZoneEnumAsiaDubai                   SmsRequestGmtZoneEnum = "Asia/Dubai"
	SMSRequestGmtZoneEnumAsiaYerevan                 SmsRequestGmtZoneEnum = "Asia/Yerevan"
	SMSRequestGmtZoneEnumAsiaKabul                   SmsRequestGmtZoneEnum = "Asia/Kabul"
	SMSRequestGmtZoneEnumAsiaYekaterinburg           SmsRequestGmtZoneEnum = "Asia/Yekaterinburg"
	SMSRequestGmtZoneEnumAsiaTashkent                SmsRequestGmtZoneEnum = "Asia/Tashkent"
	SMSRequestGmtZoneEnumAsiaKolkata                 SmsRequestGmtZoneEnum = "Asia/Kolkata"
	SMSRequestGmtZoneEnumAsiaKatmandu                SmsRequestGmtZoneEnum = "Asia/Katmandu"
	SMSRequestGmtZoneEnumAsiaDhaka                   SmsRequestGmtZoneEnum = "Asia/Dhaka"
	SMSRequestGmtZoneEnumAsiaNovosibirsk             SmsRequestGmtZoneEnum = "Asia/Novosibirsk"
	SMSRequestGmtZoneEnumAsiaRangoon                 SmsRequestGmtZoneEnum = "Asia/Rangoon"
	SMSRequestGmtZoneEnumAsiaBangkok                 SmsRequestGmtZoneEnum = "Asia/Bangkok"
	SMSRequestGmtZoneEnumAsiaKrasnoyarsk             SmsRequestGmtZoneEnum = "Asia/Krasnoyarsk"
	SMSRequestGmtZoneEnumAsiaHongKong                SmsRequestGmtZoneEnum = "Asia/Hong_Kong"
	SMSRequestGmtZoneEnumAsiaIrkutsk                 SmsRequestGmtZoneEnum = "Asia/Irkutsk"
	SMSRequestGmtZoneEnumAustraliaPerth              SmsRequestGmtZoneEnum = "Australia/Perth"
	SMSRequestGmtZoneEnumAustraliaEucla              SmsRequestGmtZoneEnum = "Australia/Eucla"
	SMSRequestGmtZoneEnumAsiaTokyo                   SmsRequestGmtZoneEnum = "Asia/Tokyo"
	SMSRequestGmtZoneEnumAsiaSeoul                   SmsRequestGmtZoneEnum = "Asia/Seoul"
	SMSRequestGmtZoneEnumAsiaYakutsk                 SmsRequestGmtZoneEnum = "Asia/Yakutsk"
	SMSRequestGmtZoneEnumAustraliaAdelaide           SmsRequestGmtZoneEnum = "Australia/Adelaide"
	SMSRequestGmtZoneEnumAustraliaDarwin             SmsRequestGmtZoneEnum = "Australia/Darwin"
	SMSRequestGmtZoneEnumAustraliaBrisbane           SmsRequestGmtZoneEnum = "Australia/Brisbane"
	SMSRequestGmtZoneEnumAustraliaHobart             SmsRequestGmtZoneEnum = "Australia/Hobart"
	SMSRequestGmtZoneEnumAsiaVladivostok             SmsRequestGmtZoneEnum = "Asia/Vladivostok"
	SMSRequestGmtZoneEnumAustraliaLordHowe           SmsRequestGmtZoneEnum = "Australia/Lord_Howe"
	SMSRequestGmtZoneEnumEtcGmt11                    SmsRequestGmtZoneEnum = "Etc/GMT-11"
	SMSRequestGmtZoneEnumAsiaMagadan                 SmsRequestGmtZoneEnum = "Asia/Magadan"
	SMSRequestGmtZoneEnumPacificNorfolk              SmsRequestGmtZoneEnum = "Pacific/Norfolk"
	SMSRequestGmtZoneEnumAsiaAnadyr                  SmsRequestGmtZoneEnum = "Asia/Anadyr"
	SMSRequestGmtZoneEnumPacificAuckland             SmsRequestGmtZoneEnum = "Pacific/Auckland"
	SMSRequestGmtZoneEnumEtcGmt12                    SmsRequestGmtZoneEnum = "Etc/GMT-12"
	SMSRequestGmtZoneEnumPacificChatham              SmsRequestGmtZoneEnum = "Pacific/Chatham"
	SMSRequestGmtZoneEnumPacificTongatapu            SmsRequestGmtZoneEnum = "Pacific/Tongatapu"
	SMSRequestGmtZoneEnumPacificKiritimati           SmsRequestGmtZoneEnum = "Pacific/Kiritimati"
)

type SmsRequestNumAzurEnum string

const (
	SMSRequestNumAzurEnumOne SmsRequestNumAzurEnum = "1"
)

type SmsRequest struct {
	DateEnvoi    *string                `json:"date_envoi,omitempty"`
	Emetteur     *string                `json:"emetteur,omitempty"`
	GmtZone      *SmsRequestGmtZoneEnum `json:"gmt_zone,omitempty"`
	Keyid        string                 `json:"keyid"`
	Nostop       *string                `json:"nostop,omitempty"`
	Num          []string               `json:"num"`
	NumAzur      *SmsRequestNumAzurEnum `json:"numAzur,omitempty"`
	RepertoireID *string                `json:"repertoireId,omitempty"`
	Sms          []string               `json:"sms"`
	Smslong      *string                `json:"smslong,omitempty"`
	Tracker      []string               `json:"tracker,omitempty"`
	Ucs2         *string                `json:"ucs2,omitempty"`
}

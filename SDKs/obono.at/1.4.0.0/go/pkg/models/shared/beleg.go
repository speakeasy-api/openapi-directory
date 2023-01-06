package shared

type BelegBelegTypenEnum string

const (
	BelegBelegTypenEnumBelegkreisinitialisierung BelegBelegTypenEnum = "Belegkreisinitialisierung"
	BelegBelegTypenEnumKassenbericht             BelegBelegTypenEnum = "Kassenbericht"
	BelegBelegTypenEnumMonatsabschluss           BelegBelegTypenEnum = "Monatsabschluss"
	BelegBelegTypenEnumStartbeleg                BelegBelegTypenEnum = "Startbeleg"
	BelegBelegTypenEnumStorno                    BelegBelegTypenEnum = "Storno"
	BelegBelegTypenEnumSystembeleg               BelegBelegTypenEnum = "Systembeleg"
	BelegBelegTypenEnumTraining                  BelegBelegTypenEnum = "Training"
)

type Beleg struct {
	BelegCodes                     []string              `json:"Beleg-Codes,omitempty"`
	BelegTypen                     []BelegBelegTypenEnum `json:"Beleg-Typen,omitempty"`
	Belegdaten                     *SignierteBelegdaten  `json:"Belegdaten,omitempty"`
	JWS                            *string               `json:"JWS,omitempty"`
	QR                             *string               `json:"QR,omitempty"`
	QRLink                         *string               `json:"QR-Link,omitempty"`
	RegistrierkasseUUID            *string               `json:"Registrierkasse-UUID,omitempty"`
	SignaturerstellungseinheitUUID *string               `json:"Signaturerstellungseinheit-UUID,omitempty"`
	Href                           *string               `json:"_href,omitempty"`
	UUID                           *string               `json:"_uuid,omitempty"`
}

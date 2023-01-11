package openapisdk.models.shared;


public enum OrderLineItemQuantitiesQuantityUomEnum {
    BALE("Bale"),
    BOX("Box"),
    CENTIMETER("Centimeter"),
    DECIMETER("Decimeter"),
    FOOT("Foot"),
    GRAM("Gram"),
    HUNDRED_POUNDS("HundredPounds"),
    INCH("Inch"),
    KILOGRAM("Kilogram"),
    KILOMETER("Kilometer"),
    METER("Meter"),
    METRIC_TON("MetricTon"),
    MILLIMETER("Millimeter"),
    PACKAGE_("Package"),
    PALLET_UNIT("PalletUnit"),
    PIECE("Piece"),
    POUND("Pound"),
    PULP_UNIT("PulpUnit"),
    REAM("Ream"),
    REEL("Reel"),
    SHEET("Sheet"),
    SHORT_TON("ShortTon"),
    SKID("Skid"),
    SQUARE_DECIMETER("SquareDecimeter"),
    SQUARE_FOOT("SquareFoot"),
    SQUARE_INCH("SquareInch"),
    SQUARE_METER("SquareMeter"),
    THOUSAND_PIECES("ThousandPieces"),
    THOUSAND_SQUARE_CENTIMETERS("ThousandSquareCentimeters"),
    THOUSAND_SQUARE_FEET("ThousandSquareFeet"),
    THOUSAND_SQUARE_INCHES("ThousandSquareInches"),
    YARD("Yard");

    public final String value;

    private OrderLineItemQuantitiesQuantityUomEnum(String value) {
        this.value = value;
    }
}

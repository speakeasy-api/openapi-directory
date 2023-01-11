package openapisdk.models.shared;


public enum BelegBelegTypenEnum {
    BELEGKREISINITIALISIERUNG("Belegkreisinitialisierung"),
    KASSENBERICHT("Kassenbericht"),
    MONATSABSCHLUSS("Monatsabschluss"),
    STARTBELEG("Startbeleg"),
    STORNO("Storno"),
    SYSTEMBELEG("Systembeleg"),
    TRAINING("Training");

    public final String value;

    private BelegBelegTypenEnum(String value) {
        this.value = value;
    }
}
